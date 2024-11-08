import {
  Injectable,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateProposalsDto } from './dto/create-proposals.dto';
import { BrowseProposalsDto } from './dto/browse-proposals.dto';
import { ProposalsDetailsDto } from './dto/proposals-details.dto';
import { DatabaseService } from 'src/database/database.service';
import { ProposalsByUserDto } from './dto/proposals-by-user';

@Injectable()
export class ProposalService {
  constructor(private readonly dataservice: DatabaseService) {}

  // Method to create proposals
  async createProposals(createAssetDto: CreateProposalsDto) {
    const { userId, assetName, description, price, category, images } = createAssetDto;

    try {
      const asset = await this.dataservice.asset.create({
        data: {
          name: assetName,
          description,
          price,
          category,
          userId,
          images: {
            create: images.map((url) => ({ url })),
          },
        },
      });
      return { assetId: asset.id, status: 'Proposal listed successfully' };
    } catch (error) {
      throw new InternalServerErrorException(`Failed to create proposal: ${error.message}`);
    }
  }

  // Method to browse proposals with filters
  async browseProposals(filters: { category?: string; investmentRange?: string }) {
    const { category, investmentRange } = filters;

    if (!category && !investmentRange) {
      throw new BadRequestException('Please provide at least one filter: either category or investmentRange.');
    }

    let filteredProposals: any = {};

    if (category) {
      filteredProposals = filteredProposals.filter(proposal =>
        proposal.category.toLowerCase() === category.toLowerCase()
        
      );
    }

    if (investmentRange) {
      const [min, max] = investmentRange.split('-').map(Number);
      filteredProposals = filteredProposals.filter(proposal => 
        proposal.investmentRequired >= min && proposal.investmentRequired <= max
      );
    }

    return filteredProposals;
  }

  // Method to get detailed information about a proposal
  async getProposalsDetails(ProposalsDetailsDto: ProposalsDetailsDto) {
    let { userId } = ProposalsDetailsDto;

    // Ensure assetId is a valid number
    if (typeof userId === 'string') {
      userId = parseInt(userId, 10);
    }

    if (!userId || isNaN(userId)) {
      throw new BadRequestException('Invalid Asset ID');
    }

    try {
      const asset = await this.dataservice.asset.findUnique({
        where: { id: userId },
        include: { images: true },
      });

      if (!asset) {
        throw new NotFoundException('Asset not found');
      }

      return {
        assetId: asset.id,
        assetName: asset.name,
        description: asset.description,
        price: asset.price,
        category: asset.category,
        images: asset.images.map((image) => image.url),
      };
    } catch (error) {
      throw new InternalServerErrorException(`Failed to get proposal details: ${error.message}`);
    }
  }

  // Method to get all assets by user ID
  async getProposalsByUser(assetsByUser: ProposalsByUserDto) {
    let { userId } = assetsByUser;

    if (typeof userId === 'string') {
      userId = parseInt(userId, 10);
    }

    try {
      const assets = await this.dataservice.asset.findMany({
        where: { userId },
        include: { images: true },
      });

      return assets.map((asset) => ({
        assetId: asset.id,
        assetName: asset.name,
        description: asset.description,
        price: asset.price,
        category: asset.category,
        images: asset.images.map((image) => image.url),
      }));
    } catch (error) {
      throw new InternalServerErrorException(`Failed to get proposals: ${error.message}`);
    }
  }

  // Method to get all assets listed by all users
  async getAllProposals() {
    try {
      const assets = await this.dataservice.asset.findMany({
        include: { images: true },
      });

      return assets.map((asset) => ({
        assetId: asset.id,
        assetName: asset.name,
        description: asset.description,
        price: asset.price,
        category: asset.category,
        images: asset.images.map((image) => image.url),
      }));
    } catch (error) {
      throw new InternalServerErrorException(`Failed to get all proposals: ${error.message}`);
    }
  }
}

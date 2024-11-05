import { Controller, Post, Get, Body, Query, UseGuards } from '@nestjs/common';
import { ProposalService } from './proposals.service';
import { CreateProposalsDto } from './dto/create-proposals.dto';
import { BrowseProposalsDto } from './dto/browse-proposals.dto';
import { ProposalsDetailsDto } from './dto/proposals-details.dto';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProposalsByUserDto } from './dto/proposals-by-user';

@ApiTags('Asset')
@Controller('asset')
export class ProposalController {
  constructor(private readonly assetService:  ProposalService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('list')
  @ApiOperation({
    description: 'This endpoint allows a user to list a new asset by providing asset details such as name, description, price, category, and images. It returns the asset ID and listing status.',
    summary: 'List a new asset',
  })
  async listProposals(@Body() createAssetDto: CreateProposalsDto) {
    try {
      return await this.assetService.createProposals(createAssetDto);
    } catch (error) {
      throw new Error(`Error creating asset: ${error.message}`);
    }
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('browse')
  @ApiOperation({
    description: 'This endpoint allows users to browse listed assets by filter. Users can apply filters to narrow down the search results. It returns a list of assets with basic details.',
    summary: 'Browse assets',
  })
  async browseProposals(@Query() filters: BrowseProposalsDto) {
    try {
      return await this.assetService.browseProposals(filters);
    } catch (error) {
      throw new Error(`Error browsing assets: ${error.message}`);
    }
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('details')
  @ApiOperation({
    description: 'This endpoint provides detailed information about a specific asset based on the asset ID. It returns the asset details including name, description, price, category, and images.',
    summary: 'Get asset details',
  })
  async getProposalsDetails(@Query() assetDetailsDto: ProposalsDetailsDto) {
    try {
      return await this.assetService.getProposalsDetails(assetDetailsDto);
    } catch (error) {
      throw new Error(`Error getting asset details: ${error.message}`);
    }
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('user-assets')
  @ApiOperation({
    description: 'This endpoint retrieves all assets associated with a specific user.',
    summary: 'Get all assets by user ID',
  })
  async getProposalsByUser(@Query() assetByUser: ProposalsByUserDto) {
    try {
      return await this.assetService.getProposalsByUser(assetByUser);
    } catch (error) {
      throw new Error(`Error getting user assets: ${error.message}`);
    }
  }

  @Get('all')
  @ApiOperation({
    description: 'This endpoint retrieves all assets listed by all users.',
    summary: 'Get all assets',
  })
  async getAllAssets() {
    try {
      return await this.assetService.getAllProposals();
    } catch (error) {
      throw new Error(`Error getting all assets: ${error.message}`);
    }
  }
}

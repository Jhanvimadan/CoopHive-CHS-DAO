import { Module } from '@nestjs/common';
import { ProposalService } from './proposals.service';
import { ProposalController } from './proposals.controller';
import { DatabaseModule } from 'src/database/database.module';

/**
 * AssetModule
 * 
 * This module manages assets within the application, providing services and controllers for asset-related operations.
 */
@Module({
  imports: [DatabaseModule],
  controllers: [ProposalController],
  providers: [ProposalService],
})
export class AssetModule {}

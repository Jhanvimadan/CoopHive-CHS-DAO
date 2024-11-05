import { Test, TestingModule } from '@nestjs/testing';
import { ProposalController } from './proposals.controller';
import { ProposalService } from './proposals.service';

/**
 * AssetController Unit Tests
 * 
 * This file contains unit tests for the AssetController. It ensures that the controller is properly defined and
 * can be instantiated without issues.
 */
describe('ProposalController', () => {
  let controller: ProposalController;

  /**
   * Setup the testing module before each test case.
   */
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProposalController],
      providers: [ProposalService],
    }).compile();

    controller = module.get<ProposalController>(ProposalController);
  });

  /**
   * Test to check if the controller is defined.
   */
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

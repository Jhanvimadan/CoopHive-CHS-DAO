import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { AssetModule } from './asset/proposals.module';
import { CartModule } from './cart/cart.module';
import { UserModule } from './user/user.module';
import { WalletModule } from './wallet/wallet.module';
import { TokenBlacklistModule } from './token-blacklist/token-blacklist.module';

/**
 * Main application module that imports and provides all necessary modules and components.
 */
@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    AssetModule,
    CartModule,
    UserModule,
    WalletModule,
    TokenBlacklistModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

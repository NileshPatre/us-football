"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.enableCors({
        origin: function (origin, callback) {
            if (!origin ||
                configService.get('WHITE_LIST_URLS').indexOf(origin) !== -1) {
                callback(null, true);
            }
            else {
                callback(new common_1.UnauthorizedException('Not allowed by CORS'));
            }
        },
    });
    const port = parseInt(configService.get('PORT'));
    await app.listen(port);
    console.log(`Application is listening on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map
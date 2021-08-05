"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerController = void 0;
const player_dto_1 = require("../../domain/dto/player.dto");
const create_player_interface_1 = require("../../domain/usecases/create-player.interface");
const common_1 = require("@nestjs/common");
let PlayerController = class PlayerController {
    constructor(createPlayer) {
        this.createPlayer = createPlayer;
    }
    async handle(body) {
        try {
            const { email } = body;
            return {
                email: `seu email é ${email}`,
            };
        }
        catch (error) {
            switch (error.message) {
                default:
                    return console.log(error);
            }
        }
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body())
], PlayerController.prototype, "handle", null);
PlayerController = __decorate([
    common_1.Controller('api/v1/players')
], PlayerController);
exports.PlayerController = PlayerController;

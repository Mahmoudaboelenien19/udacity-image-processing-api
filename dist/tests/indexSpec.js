"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const request = (0, supertest_1.default)(index_1.default);
describe('test home page route', () => {
    it('test', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api');
        expect(response.status).toBe(200);
    }));
});
describe('test validation ', () => {
    it('wrong imagename', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images?imagename=jj&height=00&width=100');
        console.log(response.text);
        // "that image name isn't available"
        expect(response.text).toBe("that image name isn't available");
    }));
    it('wrong height', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images?imagename=icelandwaterfall&height&width=100');
        expect(response.text).toBe('please put a correct height value');
    }));
    it('wrong width', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images?imagename=icelandwaterfall&height=100&width');
        expect(response.text).toBe('please put a correct width value');
    }));
});
describe("check resizing an image", () => {
    it("resizing is done", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images?imagename=icelandwaterfall&height=100&width=100');
        expect(response.status).toBe(200);
    }));
});

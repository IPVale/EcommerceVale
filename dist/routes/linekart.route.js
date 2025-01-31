"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const linekart_controller_1 = require("../controllers/linekart.controller");
exports.router = (0, express_1.Router)();
exports.router.get("/", linekart_controller_1.showLineKart);
exports.router.post("/", linekart_controller_1.addLineKart);
exports.router.delete("/:id", linekart_controller_1.deletedLineKart);
exports.router.patch("/:id", linekart_controller_1.updateLineKart);

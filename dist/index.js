"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var calc = __importStar(require("./calculadora"));
var resultado = calc.somar(1, 1);
var sub = calc.subtrair(10, 2);
var mult = calc.multiplicar(10, 2);
console.log("Resultado ( soma )= ", resultado);
console.log("Resultado ( sub )= ", sub);
console.log("Resultado ( mult )= ", mult);

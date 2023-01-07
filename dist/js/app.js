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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.use((0, cors_1.default)());
app.use(routes_1.default);
app.all('*', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    return next(new Error('Invalid route'));
}));
app.use((err, req, res, next) => {
    res.json({
        message: err.message || "An unknown error occurred!",
    });
});
const initializeConfig = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect('mongodb://localhost:27017/auth');
        console.log('Connected to MongoDb');
    }
    catch (error) {
        console.log(error);
    }
});
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield initializeConfig();
    console.log(`App running on port ${PORT}`);
}));
// const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.85ehy59.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
// const options = { useNewUrlParser: true, useUnifiedTopology: true }
// mongoose.set('useFindAndModify', false)
// mongoose
//   .connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
//   .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)
//     )
//   )
//   .catch(error => {
//     throw error
//   })

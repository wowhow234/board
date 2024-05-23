"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Userform_1 = __importDefault(require("./component/Userform"));
const Home_1 = __importDefault(require("./component/Home"));
const Header_1 = __importDefault(require("./component/Header"));
function App() {
    return (<div>
      <Header_1.default />
    <react_router_dom_1.Routes>
      <react_router_dom_1.Route path="/" element={<Home_1.default />}/>
      <react_router_dom_1.Route path="/userform" element={<Userform_1.default />}/>
    </react_router_dom_1.Routes>

    </div>);
}
exports.default = App;

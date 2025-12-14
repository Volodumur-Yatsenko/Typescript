var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { initModal } from './modules/modal/index.js';
import { initScrollProgress } from './modules/scroll/index.js';
import { initFadeIn } from './modules/animation/index.js';
import { initDataFeed } from './modules/data/index.js';
const bootstrap = () => __awaiter(void 0, void 0, void 0, function* () {
    initModal('a.button.primary, #cta .button');
    initScrollProgress('#header');
    const observer = initFadeIn('.spotlight, .features li, #banner .inner, #cta .inner, #data-feed .inner');
    yield initDataFeed({
        containerSelector: '#data-cards',
        observer,
    });
});
bootstrap().catch((error) => {
    console.error('Bootstrap error:', error);
});
//# sourceMappingURL=main.js.map
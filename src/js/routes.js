import { Home } from './Home.js';
import { PageDetail } from './PageDetail.js'; // Pas besoin de mettre le '.js' à la fin !
import { PageList} from './PageList.js';

const routes = {
  "": Home,
  "pagelist": PageList,
  "pagedetail": PageDetail,
};

export { routes };
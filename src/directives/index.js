// *****本文件作为所有全局指令的出入口******

import double from './double.js';
import shake from './shake';

export default function directives(app) {
  double(app);
  shake(app);
}

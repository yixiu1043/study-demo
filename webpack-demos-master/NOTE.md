##path.join 和 path.resolve的区别

##path.join
path.join() 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。
path.join([...paths]);


...paths string类型

path.join(__dirname, './02art-template.js');
// 'C:\Users\liangliang17\Desktop\Node_study\Node\5.path\02.art-template.js'

path.join('/foo', 'bar', './baz');
// '/foo/bar/baz'

path.join('/foo', 'bar', '/baz', '..');
// '/foo/bar'

##path.resolve
path.resolve() 把一个路径或路径片段的序列解析为一个绝对路径。
path.resolve([...paths])


...paths string类型


给定的路径的序列是 "从右往左" 被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径。

path.resolve('foo', '/baz', 'bar');
// 'C:\baz\bar'


如果处理完全部给定的 path 片段后还未生成一个绝对路径，则当前工作目录（绝对路径）会被用上。

path.resolve('bar', 'baz', 'foo');
// 'C:\Users\liangliang17\Desktop\Node_study\Node\5.path\bar\baz\foo'


生成的路径是规范化后的，且末尾的斜杠会被删除，除非路径被解析为根目录。

path.resolve('/foo', 'bar/', 'baz/');
// 'C:\foo\bar\baz' 
// 注意：foo前面的 '/' 代表根目录，即'C:'; 并且baz末尾的斜线会删除

path.resolve('/');
// 'C:\' 如果路径为根路径，末尾的斜线不会删除


长度为零的path片段会被忽略

path.resolve('foo', '/baz', '', 'bar');
// 'C:\baz\bar'


如果没有传入path片段，则resolve会返回当前工作目录的绝对路径

path.resolve();
// 'C:\Users\liangliang17\Desktop\Node_study\Node\5.path'

作者：一萧烟雨任平生
链接：https://www.jianshu.com/p/4f81f01389dd
來源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
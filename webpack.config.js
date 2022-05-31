const path = require("path"); //node.js核心模块，专门用来处理路径问题

module.exports = {
    entry: './src/main.js',//相对路径
    output: {
        // resolve用来处理绝对路径，__dirname是node.js的变量，代表当前文件的文件夹目录
        
        path: path.resolve(__dirname,"dist"),//绝对路径
        filename: 'main.js'
    },
    // 加载器
    module:{
        rules:[
            // loader的配置
            {
                test: /\.css$/,// 只有.css文件才会以以下的方法处理
                // 执行顺序：从右到左或从下到上
                use: [
                    "style-loader", // 将js中css通过创建style标签添加到html文件中
                     "css-loader" // 将css 资源编译成commonjs的模块到js中
                     ],
            }
        ]
    },
    // 插件
    plugins:[
        // plugin的配置
    ],
    // 模式
    mode: "development"
  };
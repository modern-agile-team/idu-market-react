const paths = require("./paths");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");
const getClientEnvironment = require("./env");

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));

module.exports = {
  mode: "production", //프로덕션 모드로 설정하여 최적화 옵션들을 활성화
  entry: paths.ssrIndexJs, //엔트리 경로
  target: "node", // 노드 환경에서 실행될 것이라는 점을 명시
  output: {
    path: paths.ssrBuild, //빌드 경로
    filename: "server.js", //파일 이름
    chunkFilename: "js/[name].chunk.js", // 청크 파일 이름
    publicPath: paths.publicUrlOrPath, //정적 파일이 제공될 경로
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: [/\.avif$/],
            loader: require.resolve("url-loader"),
            options: {
              limit: 10000,
              mimetype: "image/avif",
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve("url-loader"),
            options: {
                emitFile: false, // 파일을 따로 저장하지 않는 옵션
                limit: 10000, // 원래는 9.76KB가 넘어가면 파일로 저장하는데
                // emitFile 값이 false 일땐 경로만 준비하고 파일은 저장하지 않습니다.
                name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: paths.appSrc,
            loader: require.resolve("babel-loader"),
            options: {
              customize: require.resolve(
                "babel-preset-react-app/webpack-overrides"
              ),
              presets: [
                [
                    require.resolve('babel-preset-react-app'),
                    {
                        runtime: 'automatic',
                    }
                ]
              ],
              plugins: [
                [
                  require.resolve("babel-plugin-named-asset-import"),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent:
                          "@svgr/webpack?-svgo,+titleProp,+ref![path]",
                      },
                    },
                  },
                ],
              ],
              cacheDirectory: true,
              cacheCompression: false,
              compact: false,
            },
          },
          {
            test: cssRegex,
            exclude: [
              cssModuleRegex,
              /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
            ],
            loader: require.resolve("css-loader"),
            options: {
                importLoaders: 1,
                modules: {
                    exportOnlyLocals: true,
                }
            }
          },
          {
            test: cssModuleRegex,
            exclude: [/ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/],
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1,
              modules: {
                exportOnlyLocals: true,
                getLocalIdent: getCSSModuleLocalIdent,
              },
            },
          },
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: [
              {
                loader: require.resolve("css-loader"),
                options: {
                  importLoaders: 3,
                  modules: {
                    exportOnlyLocals: true,
                  },
                },
              },
              require.resolve("sass-loader"),
            ],
          },
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: [
              {
                loader: require.resolve("css-loader"),
                options: {
                  importLoaders: 3,
                  modules: {
                    exportOnlyLocals: true,
                    getLocalIdent: getCSSModuleLocalIdent,
                  },
                },
              },
              require.resolve("sass-loader"),
            ],
          },
          {
            loader: require.resolve("file-loader"),
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            options: {
              emitFile: false, // 파일을 따로 저장하지 않는 옵션
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ["node_modules"],
  },
  externals: [nodeExternals({
      allowlist: [/@babel/],
  })],
  plugins: [
    new webpack.DefinePlugin(env.stringified), //환경 변수 주입
  ],
};
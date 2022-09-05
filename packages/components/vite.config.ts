import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    target: 'modules',
    outDir: 'es', // 打包文件目录
    minify: false,
    // cssCodeSplit: true, // css 分离
    rollupOptions: {
      external: ['vue'],
      input: ['src/index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true, // 打包目录和开发目录对应
          dir: 'es', // 打包根目录
          preserveModulesRoot: 'src',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true, // 打包目录和开发目录对应
          dir: 'lib', // 打包根目录
          preserveModulesRoot: 'src',
        },
      ],
    },
    lib: {
      entry: './index.ts',
      formats: ['es', 'cjs'],
    },
  },
  plugins: [
    vue(),
    dts({
      //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: '../../tsconfig.json',
    }),
    //因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
    dts({
      outputDir: 'lib',
      tsConfigFilePath: '../../tsconfig.json',
    }),
  ],
})

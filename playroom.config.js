module.exports = {
  components: './src/components',
  outputPath: './dist/playroom',

  // Optional:
  title: 'Test',
  widths: [320, 375, 768, 1024],
  port: 9000,
  openBrowser: true,
  exampleCode: `
    <Button>
      Hello World!
    </Button>
  `,
  // title: 'My Awesome Library',
  // themes: './src/themes',
  // snippets: './playroom/snippets.js',
  // frameComponent: './playroom/FrameComponent.js',
  // widths: [320, 375, 768, 1024],
  // port: 9000,
  // openBrowser: true,
  // exampleCode: `
  //   <Button>
  //     Hello World!
  //   </Button>
  // `,
  // baseUrl: '/playroom/',
  // webpackConfig: () => ({
  //   // Custom webpack config goes here...
  // })
};
export class InteractiveConsole {
  private inStream: NodeJS.ReadStream;

  constructor(inStream: NodeJS.ReadStream) {
    this.inStream = inStream;
  }

  public start() {
    this.inStream.on("data", (data) => {
      console.log(data);
    });
  }
}

const defaultConsole = new InteractiveConsole(process.stdin);
export default defaultConsole;

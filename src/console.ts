export class InteractiveConsole {
  private inStream: NodeJS.ReadStream;

  constructor(inStream: NodeJS.ReadStream) {
    this.inStream = inStream;
  }

  public start() {
    this.inStream.on("data", (buff) => {
      const str = buff.toString();
      console.log(str); // todo: allow to use console in some way
    });
  }
}

const defaultConsole = new InteractiveConsole(process.stdin);
export default defaultConsole;

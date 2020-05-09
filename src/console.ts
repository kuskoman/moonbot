export class InteractiveConsole {
  private PROMPT = "> ";
  private inStream: NodeJS.ReadStream;
  private outStream: NodeJS.WriteStream;

  constructor(inStream: NodeJS.ReadStream, outStream: NodeJS.WriteStream) {
    this.inStream = inStream;
    this.outStream = outStream;
  }

  public start() {
    this.outStream.write(this.PROMPT);
    this.inStream.on("data", (data) => {
      console.log(data);
    });
  }
}

const defaultConsole = new InteractiveConsole(process.stdin, process.stdout);
export default defaultConsole;

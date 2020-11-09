class Block {
  public index: number
  public hash: string
  public previousHash: string
  public data: string
   public timestamp: number
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
    ){
      this.index = index
      this.hash = hash
      this.previousHash = previousHash
      this.data = data
      this.timestamp = timestamp}
}

const genesisBlock:Block = new Block(0, "0202020202", "", "Hello", 123456)
const testBlock: Block = new Block(1, "0202020202", "", "World", 123456)
// 여기서 blockchain 이란 블록의 연결이다. 이것을 배열로 표현할 수 있다. [Block] 이란 blockchain 안에는 Block class의 속성을 가진 것만 들어갈 수 있다. 
let blockchain: [Block] = [genesisBlock] 
// blockchain.push(testBlock)

console.log(blockchain)
export ={}
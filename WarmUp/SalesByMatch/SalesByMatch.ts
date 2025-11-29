'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n: number, ar: number[]): number {
    // Write your code here
    
    const cores: Record<number, number> = {};
    
    //arr =[10 20 20 10 10 30 50 10 20 ]
    for (const meia of ar) {
        if (cores[meia] === undefined) {
            cores[meia] = 1;            
        } else {
            cores[meia] = cores[meia] + 1;  
            //cores[10] = cores[10] + 1;
        }
    }

    //cores = {1:2, 2:1, 3:4}
    
    let totalPares = 0;
    
    for (const cor in cores ){
        
        const quantidade = cores[cor];
        
        const pares = Math.floor(quantidade/2);
        
        totalPares = totalPares + pares;
    }
    
    return totalPares;
 
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    const ar: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result: number = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}

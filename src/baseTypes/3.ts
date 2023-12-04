let some: unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
    str = some as string;
} else {    
    console.log('Значення не є рядком');
}
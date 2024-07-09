declare let isBol: boolean;
declare let firstname: string;
declare let lastname: string;
declare let middlename: string;
declare let familyMember: number;
declare let arr: number[];
declare let stringArr: string[];
declare let genericsArr: Array<number>;
declare let genericsmultipleArr: Array<number>;
type students = {
    name: string;
    age: number;
    gender: boolean;
    college?: string;
};
declare let obj: students;
declare let objofarr: students[];
declare let tupleArr: [number, string];
declare enum color {
    RED = 0,
    BLUE = 1,
    VIOLET = 2
}
declare enum books {
    books_request = "book-requrst",
    books_accepted = "book-accepted",
    books_done = "book-done"
}
declare let a: undefined;
declare let u: null;
declare let s: any;
declare function sum(a: number, b: number): number;
declare function concat(a: any, b: any): void;
interface company {
    post: string;
    salery?: number;
}
declare let arr1: [string | boolean];
declare let masaiStudents: students & company;

class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];

  constructor(protected key: Key) {
  }

  abstract openDoor(person: Person): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log('Двері відчинені');
    } else {
      console.log('Двері зачинені');
    }
  }
}

class MyHouse extends House {
  openDoor(person: Person): void {
    if (person.getKey().getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('Door open');
    } else {
      console.log('Door closed');
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person);
house.comeIn(person);

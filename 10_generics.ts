/* Convesões
* S => state
* T => type
* K => key
* V => value
* E => element
*/

function useState<T extends number | string = number>() { // <T> sintaxe do generics, number | string asceita string ou numero, = number quer dizer que se não definir um tipo o padrao e numero
  let state: T;

  function get() {
    return state;
  }

  function set(newValue: T) {
    state = newValue;
  }

  return { get, set };
}

let newState = useState<string>();
newState.get();
newState.set(20);
newState.set('20');
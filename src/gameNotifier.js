const Event = {
  System: 'system',
  Login: 'login',
  Logout: 'logout',
  Create: 'create',
};

class EventMessage {
  constructor(from, type) {
    this.from = from;
    this.type = type;

  }
}

class GameEventNotifier {
  events = [];
  handlers = [];

  constructor() {
    let port = window.location.port;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    console.log("HERE", window.location.hostname)
    this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
    this.socket.onopen = (event) => {
      this.receiveEvent(new EventMessage('FishTankScale', Event.System, { msg: 'connected' }));
    };
    this.socket.onclose = (event) => {
      this.receiveEvent(new EventMessage('FishTankScale', Event.System, { msg: 'disconnected' }));
    };
    this.socket.onmessage = async (msg) => {
      try {
        const event = JSON.parse(await msg.data.text());
        this.receiveEvent(event);
      } catch { }
    };
  }

  broadcastEvent(from, type) {
    const event = new EventMessage(from, type);
    // if (this.socket.readyState === WebSocket.OPEN) {
    // console.log("socket open and sent!");
    this.socket.send(JSON.stringify(event));
    // }
    // else {
    // console.log("socket not open :(");
    // }

  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {
    this.events.push(event);

    this.events.forEach((e) => {
      this.handlers.forEach((handler) => {
        handler(e);
      });
    });
  }
}

const GameNotifier = new GameEventNotifier();
export { Event, GameNotifier };

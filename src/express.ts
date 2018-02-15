import { Request } from './request';
import { Response } from './response';
import { Router } from './router';

declare const jest: any;

// https://expressjs.com/en/4x/api.html#app
export class Express {
  // Properties
  public locals: any;
  public mountpath: string;
  // Application Methods
  public json: any;
  public static: any;
  // tslint:disable-next-line:variable-name
  public Router: any;
  public urlencoded: any;
  // Methods
  public all: any;
  public delete: any;
  public disable: any;
  public disabled: any;
  public enable: any;
  public enabled: any;
  public engine: any;
  public get: any;
  public listen: any;
  public head: any;
  public post: any;
  public put: any;
  public connect: any;
  public options: any;
  public trace: any;
  public patch: any;
  public param: any;
  public path: any;
  public render: any;
  public route: any;
  public set: any;
  public use: any;
  // Class
  public request: Request;
  public response: Response;
  // Private
  private setting: any;

  constructor() {
    // Properties
    this.locals = {};
    this.mountpath = '';
    this.setting = {};
    // Application Methods
    this.json = jest.fn();
    this.static = jest.fn();
    this.Router = jest.fn(() => new Router());
    this.urlencoded = jest.fn();
    // Methods
    this.all = jest.fn();
    this.delete = jest.fn();
    this.disable = jest.fn((key: any) => {
      this.setting[key] = false;
    });
    this.disabled = jest.fn((key: any) => {
      return this.setting[key] === false;
    });
    this.enable = jest.fn((key: any) => {
      this.setting[key] = true;
    });
    this.enabled = jest.fn((key: any) => {
      return this.setting[key] === true;
    });
    this.engine = jest.fn();
    // TODO app.listen(port, [hostname], [backlog], [callback])
    this.listen = jest.fn();
    this.head = jest.fn();
    this.post = jest.fn();
    this.put = jest.fn();
    this.connect = jest.fn();
    this.options = jest.fn();
    this.trace = jest.fn();
    this.patch = jest.fn();
    this.param = jest.fn();
    // TODO app.path()
    this.path = jest.fn();
    // TODO app.render(view, [locals], callback)
    this.render = jest.fn();
    // TODO app.use([path,] callback [, callback...])
    this.use = jest.fn();
    this.request = new Request();
    this.response = new Response();
    this.get = jest.fn((path: any, callback: any) => {
      if (typeof path === 'string' && callback === undefined) {
        return this.setting[path];
      }
      if (typeof path === 'string' && typeof callback === 'function') {
        return callback(this.request, this.response);
      }
      return path(this.request, this.response);
    });
    // TODO app.route(path)
    this.route = jest.fn(() => {
      return {
        get: this.get,
      };
    });

    this.set = jest.fn((key: any, value: any) => {
      this.setting[key] = value;
    });
    return this;
  }

  public setMountPath(value: string) {
    this.mountpath = value;
  }

  public setLocals(key: string, value: string) {
    this.locals[key] = value;
  }

  public resetMocked() {
    // Properties
    this.locals = {};
    this.mountpath = '';
    // Application Methods
    this.json.mockReset();
    this.static.mockReset();
    this.Router.mockReset();
    this.urlencoded.mockReset();
    // Methods
    this.all.mockReset();
    this.delete.mockReset();
    this.disable.mockReset();
    this.disabled.mockReset();
    this.enable.mockReset();
    this.enabled.mockReset();
    this.engine.mockReset();
    this.listen.mockReset();
    this.head.mockReset();
    this.post.mockReset();
    this.put.mockReset();
    this.connect.mockReset();
    this.options.mockReset();
    this.trace.mockReset();
    this.patch.mockReset();
    this.param.mockReset();
    this.path.mockReset();
    this.render.mockReset();
    this.use.mockReset();
    this.get.mockReset();
    this.route.mockReset();
    this.set.mockReset();
    // Class
    this.request.resetMocked();
    this.response.resetMocked();
    // Private
    this.setting = {};
  }
}

const NodesAPI = require('./endpoints/nodes');
const NodeGroupsAPI = require('./endpoints/node_groups');
const AuthorizationAPI = require('./endpoints/authorize');
const FoldersAPI = require('./endpoints/folders');
const ProductsAPI = require('./endpoints/products');

module.exports = class {

  constructor() {
    this.version = 1;
    this._config = {};

    // mount endpoints;
    this.nodes = new NodesAPI(this._config);
    this.nodeGroups = new NodeGroupsAPI(this._config);
    this.authorization = new AuthorizationAPI(this._config);
    this.folders = new FoldersAPI(this._config);
    this.products = new ProductsAPI(this._config);
  }

  setAccessToken(token) {
    this._config.accessToken = token;
  }
};

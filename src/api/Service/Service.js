// import { encode } from "base-64";
import ServiceError from "../Handler/ServiceError";


export default class Service {
  constructor(api) {
    this.api = api;
  }


  handleResponse = (data) => {
    return data?.data;
  };

  handleParseError = async (error) => {
    if (error) {
      switch (error.code) {
        // case INVALID_SESSION_TOKEN:
        //   throw new ServiceError(error);
        default:
          throw new ServiceError(error);
      }
    } else {
      throw new ServiceError({ code: 500 });
    }
  };

  async getDashboardData() {
    try {
      const data = await this.api.get(``, { y:"2021" });
      if (data.status == 200) {
        return this.handleResponse(data);
      } else {
        return this.handleParseError({ message: data.data, code: data.status });
      }
    } catch (error) {
      return this.handleParseError(error);
    }
  }
}

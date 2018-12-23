import { environment } from '../environments/environment';

export class AppSettings {
    public static envEndpoints = new Map([['local', 'http://localhost:8081/'],[ 'dev', '/pys3viewerapi/'],[ 'sit', '/pys3viewerapi/'], [ 'uat', '/pys3viewerapi/'],[ 'prod', '/pys3viewerapi/']]);
    public static API_ENDPOINT= AppSettings.envEndpoints.get(environment.env);
  }

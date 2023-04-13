
import {Network} from "@capacitor/network";
import {from, map} from "rxjs";

export interface AppState {
  isNetworkConnected: boolean;
}

export const initialState: AppState = {

  isNetworkConnected: true,
};

from (Network.getStatus() ).pipe(
  map((event: { connected: any; }) => event.connected)
).subscribe((connected) => {
  console.log(connected, "connected");
});

import { ConcentrationTest } from "src/types/interfaces";
import ResponseDto from "../response.dto";

// interface: get recently concentration response body DTO //
export default interface GetRecentlyConcentrationResponseDto extends ResponseDto {
  concentrationTests: ConcentrationTest[];
}
/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional } from "class-validator";
import { Transform } from "class-transformer";

@InputType()
class HandicapHistoryWhereUniqueInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Transform((prop) => parseInt(prop.value), {
    toClassOnly: true,
  })
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  id?: number | null;
}

export { HandicapHistoryWhereUniqueInput as HandicapHistoryWhereUniqueInput };

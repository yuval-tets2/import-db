/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TeamscoreWhereInput } from "./TeamscoreWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class TeamscoreCountArgs {
  @ApiProperty({
    required: false,
    type: () => TeamscoreWhereInput,
  })
  @Field(() => TeamscoreWhereInput, { nullable: true })
  @Type(() => TeamscoreWhereInput)
  where?: TeamscoreWhereInput;
}

export { TeamscoreCountArgs as TeamscoreCountArgs };

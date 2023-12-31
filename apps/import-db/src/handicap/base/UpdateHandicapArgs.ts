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
import { HandicapWhereUniqueInput } from "./HandicapWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { HandicapUpdateInput } from "./HandicapUpdateInput";

@ArgsType()
class UpdateHandicapArgs {
  @ApiProperty({
    required: true,
    type: () => HandicapWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HandicapWhereUniqueInput)
  @Field(() => HandicapWhereUniqueInput, { nullable: false })
  where!: HandicapWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => HandicapUpdateInput,
  })
  @ValidateNested()
  @Type(() => HandicapUpdateInput)
  @Field(() => HandicapUpdateInput, { nullable: false })
  data!: HandicapUpdateInput;
}

export { UpdateHandicapArgs as UpdateHandicapArgs };

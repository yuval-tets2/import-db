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
import { HoleWhereUniqueInput } from "./HoleWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { HoleUpdateInput } from "./HoleUpdateInput";

@ArgsType()
class UpdateHoleArgs {
  @ApiProperty({
    required: true,
    type: () => HoleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HoleWhereUniqueInput)
  @Field(() => HoleWhereUniqueInput, { nullable: false })
  where!: HoleWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => HoleUpdateInput,
  })
  @ValidateNested()
  @Type(() => HoleUpdateInput)
  @Field(() => HoleUpdateInput, { nullable: false })
  data!: HoleUpdateInput;
}

export { UpdateHoleArgs as UpdateHoleArgs };

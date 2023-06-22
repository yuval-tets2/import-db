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
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TeamscoreOrderByInput } from "./TeamscoreOrderByInput";

@ArgsType()
class TeamscoreFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TeamscoreWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TeamscoreWhereInput, { nullable: true })
  @Type(() => TeamscoreWhereInput)
  where?: TeamscoreWhereInput;

  @ApiProperty({
    required: false,
    type: [TeamscoreOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TeamscoreOrderByInput], { nullable: true })
  @Type(() => TeamscoreOrderByInput)
  orderBy?: Array<TeamscoreOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TeamscoreFindManyArgs as TeamscoreFindManyArgs };

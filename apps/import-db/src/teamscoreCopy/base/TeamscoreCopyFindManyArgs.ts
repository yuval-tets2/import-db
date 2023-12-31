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
import { TeamscoreCopyWhereInput } from "./TeamscoreCopyWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TeamscoreCopyOrderByInput } from "./TeamscoreCopyOrderByInput";

@ArgsType()
class TeamscoreCopyFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TeamscoreCopyWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TeamscoreCopyWhereInput, { nullable: true })
  @Type(() => TeamscoreCopyWhereInput)
  where?: TeamscoreCopyWhereInput;

  @ApiProperty({
    required: false,
    type: [TeamscoreCopyOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TeamscoreCopyOrderByInput], { nullable: true })
  @Type(() => TeamscoreCopyOrderByInput)
  orderBy?: Array<TeamscoreCopyOrderByInput>;

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

export { TeamscoreCopyFindManyArgs as TeamscoreCopyFindManyArgs };

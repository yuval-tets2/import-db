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
import {
  IsString,
  IsOptional,
  IsDate,
  IsInt,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { SeasonCourseCreateNestedManyWithoutSeasonsInput } from "./SeasonCourseCreateNestedManyWithoutSeasonsInput";
import { TeamCreateNestedManyWithoutSeasonsInput } from "./TeamCreateNestedManyWithoutSeasonsInput";

@InputType()
class SeasonCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  startDate!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  endDate!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  midseasonDate!: Date;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  numTeams!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  playersPerTeam!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  scheduleCreated!: number;

  @ApiProperty({
    required: false,
    type: () => SeasonCourseCreateNestedManyWithoutSeasonsInput,
  })
  @ValidateNested()
  @Type(() => SeasonCourseCreateNestedManyWithoutSeasonsInput)
  @IsOptional()
  @Field(() => SeasonCourseCreateNestedManyWithoutSeasonsInput, {
    nullable: true,
  })
  seasonCourse?: SeasonCourseCreateNestedManyWithoutSeasonsInput;

  @ApiProperty({
    required: false,
    type: () => TeamCreateNestedManyWithoutSeasonsInput,
  })
  @ValidateNested()
  @Type(() => TeamCreateNestedManyWithoutSeasonsInput)
  @IsOptional()
  @Field(() => TeamCreateNestedManyWithoutSeasonsInput, {
    nullable: true,
  })
  team?: TeamCreateNestedManyWithoutSeasonsInput;
}

export { SeasonCreateInput as SeasonCreateInput };

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
import { MatchscoreUpdateManyWithoutMembersInput } from "./MatchscoreUpdateManyWithoutMembersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsEnum,
  IsDate,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumMemberTee } from "./EnumMemberTee";
import { ScoreUpdateManyWithoutMembersInput } from "./ScoreUpdateManyWithoutMembersInput";
import { TeamUpdateManyWithoutMembersInput } from "./TeamUpdateManyWithoutMembersInput";

@InputType()
class MemberUpdateInput {
  @ApiProperty({
    required: false,
    type: () => MatchscoreUpdateManyWithoutMembersInput,
  })
  @ValidateNested()
  @Type(() => MatchscoreUpdateManyWithoutMembersInput)
  @IsOptional()
  @Field(() => MatchscoreUpdateManyWithoutMembersInput, {
    nullable: true,
  })
  matchscore?: MatchscoreUpdateManyWithoutMembersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lname?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fname?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  active?: string;

  @ApiProperty({
    required: false,
    enum: EnumMemberTee,
  })
  @IsEnum(EnumMemberTee)
  @IsOptional()
  @Field(() => EnumMemberTee, {
    nullable: true,
  })
  tee?: "MEN" | "SENIOR" | "LADIES";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  ghin?: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  createdAt?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: () => ScoreUpdateManyWithoutMembersInput,
  })
  @ValidateNested()
  @Type(() => ScoreUpdateManyWithoutMembersInput)
  @IsOptional()
  @Field(() => ScoreUpdateManyWithoutMembersInput, {
    nullable: true,
  })
  scores?: ScoreUpdateManyWithoutMembersInput;

  @ApiProperty({
    required: false,
    type: () => TeamUpdateManyWithoutMembersInput,
  })
  @ValidateNested()
  @Type(() => TeamUpdateManyWithoutMembersInput)
  @IsOptional()
  @Field(() => TeamUpdateManyWithoutMembersInput, {
    nullable: true,
  })
  team?: TeamUpdateManyWithoutMembersInput;
}

export { MemberUpdateInput as MemberUpdateInput };
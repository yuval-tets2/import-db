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
import { HoleCreateNestedManyWithoutTeesInput } from "./HoleCreateNestedManyWithoutTeesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsEnum,
  IsInt,
  IsNumber,
  IsDate,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumTeeGender } from "./EnumTeeGender";
import { CourseWhereUniqueInput } from "../../course/base/CourseWhereUniqueInput";

@InputType()
class TeeCreateInput {
  @ApiProperty({
    required: false,
    type: () => HoleCreateNestedManyWithoutTeesInput,
  })
  @ValidateNested()
  @Type(() => HoleCreateNestedManyWithoutTeesInput)
  @IsOptional()
  @Field(() => HoleCreateNestedManyWithoutTeesInput, {
    nullable: true,
  })
  hole?: HoleCreateNestedManyWithoutTeesInput;

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
    enum: EnumTeeGender,
  })
  @IsEnum(EnumTeeGender)
  @Field(() => EnumTeeGender)
  gender!: "M" | "F";

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  par!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  rating!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  slope!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  frating!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  fslope!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  brating!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  bslope!: number;

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
    type: () => CourseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CourseWhereUniqueInput)
  @IsOptional()
  @Field(() => CourseWhereUniqueInput, {
    nullable: true,
  })
  course?: CourseWhereUniqueInput | null;
}

export { TeeCreateInput as TeeCreateInput };

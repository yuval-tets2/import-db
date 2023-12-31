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
import { IsString, IsOptional, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ClubWhereUniqueInput } from "../../club/base/ClubWhereUniqueInput";
import { CourseRatingUpdateManyWithoutCoursesInput } from "./CourseRatingUpdateManyWithoutCoursesInput";
import { CourseTeetypeUpdateManyWithoutCoursesInput } from "./CourseTeetypeUpdateManyWithoutCoursesInput";
import { SeasonCourseUpdateManyWithoutCoursesInput } from "./SeasonCourseUpdateManyWithoutCoursesInput";
import { TeeUpdateManyWithoutCoursesInput } from "./TeeUpdateManyWithoutCoursesInput";

@InputType()
class CourseUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  courseName?: string;

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
    type: () => ClubWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ClubWhereUniqueInput)
  @IsOptional()
  @Field(() => ClubWhereUniqueInput, {
    nullable: true,
  })
  club?: ClubWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CourseRatingUpdateManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => CourseRatingUpdateManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => CourseRatingUpdateManyWithoutCoursesInput, {
    nullable: true,
  })
  courseRating?: CourseRatingUpdateManyWithoutCoursesInput;

  @ApiProperty({
    required: false,
    type: () => CourseTeetypeUpdateManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => CourseTeetypeUpdateManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => CourseTeetypeUpdateManyWithoutCoursesInput, {
    nullable: true,
  })
  courseTeetype?: CourseTeetypeUpdateManyWithoutCoursesInput;

  @ApiProperty({
    required: false,
    type: () => SeasonCourseUpdateManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => SeasonCourseUpdateManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => SeasonCourseUpdateManyWithoutCoursesInput, {
    nullable: true,
  })
  seasonCourse?: SeasonCourseUpdateManyWithoutCoursesInput;

  @ApiProperty({
    required: false,
    type: () => TeeUpdateManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => TeeUpdateManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => TeeUpdateManyWithoutCoursesInput, {
    nullable: true,
  })
  tee?: TeeUpdateManyWithoutCoursesInput;
}

export { CourseUpdateInput as CourseUpdateInput };

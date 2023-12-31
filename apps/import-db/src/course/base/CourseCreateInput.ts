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
import { IsString, IsDate, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ClubWhereUniqueInput } from "../../club/base/ClubWhereUniqueInput";
import { CourseRatingCreateNestedManyWithoutCoursesInput } from "./CourseRatingCreateNestedManyWithoutCoursesInput";
import { CourseTeetypeCreateNestedManyWithoutCoursesInput } from "./CourseTeetypeCreateNestedManyWithoutCoursesInput";
import { SeasonCourseCreateNestedManyWithoutCoursesInput } from "./SeasonCourseCreateNestedManyWithoutCoursesInput";
import { TeeCreateNestedManyWithoutCoursesInput } from "./TeeCreateNestedManyWithoutCoursesInput";

@InputType()
class CourseCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  courseName!: string;

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
    required: true,
    type: () => ClubWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ClubWhereUniqueInput)
  @Field(() => ClubWhereUniqueInput)
  club!: ClubWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CourseRatingCreateNestedManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => CourseRatingCreateNestedManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => CourseRatingCreateNestedManyWithoutCoursesInput, {
    nullable: true,
  })
  courseRating?: CourseRatingCreateNestedManyWithoutCoursesInput;

  @ApiProperty({
    required: false,
    type: () => CourseTeetypeCreateNestedManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => CourseTeetypeCreateNestedManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => CourseTeetypeCreateNestedManyWithoutCoursesInput, {
    nullable: true,
  })
  courseTeetype?: CourseTeetypeCreateNestedManyWithoutCoursesInput;

  @ApiProperty({
    required: false,
    type: () => SeasonCourseCreateNestedManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => SeasonCourseCreateNestedManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => SeasonCourseCreateNestedManyWithoutCoursesInput, {
    nullable: true,
  })
  seasonCourse?: SeasonCourseCreateNestedManyWithoutCoursesInput;

  @ApiProperty({
    required: false,
    type: () => TeeCreateNestedManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => TeeCreateNestedManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => TeeCreateNestedManyWithoutCoursesInput, {
    nullable: true,
  })
  tee?: TeeCreateNestedManyWithoutCoursesInput;
}

export { CourseCreateInput as CourseCreateInput };

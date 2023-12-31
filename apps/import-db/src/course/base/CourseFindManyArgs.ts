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
import { CourseWhereInput } from "./CourseWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CourseOrderByInput } from "./CourseOrderByInput";

@ArgsType()
class CourseFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CourseWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CourseWhereInput, { nullable: true })
  @Type(() => CourseWhereInput)
  where?: CourseWhereInput;

  @ApiProperty({
    required: false,
    type: [CourseOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CourseOrderByInput], { nullable: true })
  @Type(() => CourseOrderByInput)
  orderBy?: Array<CourseOrderByInput>;

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

export { CourseFindManyArgs as CourseFindManyArgs };

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
import { CourseListRelationFilter } from "../../course/base/CourseListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ClubWhereInput {
  @ApiProperty({
    required: false,
    type: () => CourseListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CourseListRelationFilter)
  @IsOptional()
  @Field(() => CourseListRelationFilter, {
    nullable: true,
  })
  course?: CourseListRelationFilter;
}

export { ClubWhereInput as ClubWhereInput };

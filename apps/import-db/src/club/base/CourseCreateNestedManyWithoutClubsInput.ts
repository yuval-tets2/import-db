/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CourseWhereUniqueInput } from "../../course/base/CourseWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CourseCreateNestedManyWithoutClubsInput {
  @Field(() => [CourseWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CourseWhereUniqueInput],
  })
  connect?: Array<CourseWhereUniqueInput>;
}

export { CourseCreateNestedManyWithoutClubsInput as CourseCreateNestedManyWithoutClubsInput };
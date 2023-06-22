/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateCourseArgs } from "./CreateCourseArgs";
import { UpdateCourseArgs } from "./UpdateCourseArgs";
import { DeleteCourseArgs } from "./DeleteCourseArgs";
import { CourseCountArgs } from "./CourseCountArgs";
import { CourseFindManyArgs } from "./CourseFindManyArgs";
import { CourseFindUniqueArgs } from "./CourseFindUniqueArgs";
import { Course } from "./Course";
import { CourseRatingFindManyArgs } from "../../courseRating/base/CourseRatingFindManyArgs";
import { CourseRating } from "../../courseRating/base/CourseRating";
import { CourseTeetypeFindManyArgs } from "../../courseTeetype/base/CourseTeetypeFindManyArgs";
import { CourseTeetype } from "../../courseTeetype/base/CourseTeetype";
import { SeasonCourseFindManyArgs } from "../../seasonCourse/base/SeasonCourseFindManyArgs";
import { SeasonCourse } from "../../seasonCourse/base/SeasonCourse";
import { TeeFindManyArgs } from "../../tee/base/TeeFindManyArgs";
import { Tee } from "../../tee/base/Tee";
import { Club } from "../../club/base/Club";
import { CourseService } from "../course.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Course)
export class CourseResolverBase {
  constructor(
    protected readonly service: CourseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "any",
  })
  async _coursesMeta(
    @graphql.Args() args: CourseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Course])
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "any",
  })
  async courses(@graphql.Args() args: CourseFindManyArgs): Promise<Course[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Course, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "own",
  })
  async course(
    @graphql.Args() args: CourseFindUniqueArgs
  ): Promise<Course | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Course)
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "create",
    possession: "any",
  })
  async createCourse(@graphql.Args() args: CreateCourseArgs): Promise<Course> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        club: {
          connect: args.data.club,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Course)
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async updateCourse(
    @graphql.Args() args: UpdateCourseArgs
  ): Promise<Course | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          club: {
            connect: args.data.club,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Course)
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "delete",
    possession: "any",
  })
  async deleteCourse(
    @graphql.Args() args: DeleteCourseArgs
  ): Promise<Course | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [CourseRating], { name: "courseRating" })
  @nestAccessControl.UseRoles({
    resource: "CourseRating",
    action: "read",
    possession: "any",
  })
  async resolveFieldCourseRating(
    @graphql.Parent() parent: Course,
    @graphql.Args() args: CourseRatingFindManyArgs
  ): Promise<CourseRating[]> {
    const results = await this.service.findCourseRating(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [CourseTeetype], { name: "courseTeetype" })
  @nestAccessControl.UseRoles({
    resource: "CourseTeetype",
    action: "read",
    possession: "any",
  })
  async resolveFieldCourseTeetype(
    @graphql.Parent() parent: Course,
    @graphql.Args() args: CourseTeetypeFindManyArgs
  ): Promise<CourseTeetype[]> {
    const results = await this.service.findCourseTeetype(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [SeasonCourse], { name: "seasonCourse" })
  @nestAccessControl.UseRoles({
    resource: "SeasonCourse",
    action: "read",
    possession: "any",
  })
  async resolveFieldSeasonCourse(
    @graphql.Parent() parent: Course,
    @graphql.Args() args: SeasonCourseFindManyArgs
  ): Promise<SeasonCourse[]> {
    const results = await this.service.findSeasonCourse(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Tee], { name: "tee" })
  @nestAccessControl.UseRoles({
    resource: "Tee",
    action: "read",
    possession: "any",
  })
  async resolveFieldTee(
    @graphql.Parent() parent: Course,
    @graphql.Args() args: TeeFindManyArgs
  ): Promise<Tee[]> {
    const results = await this.service.findTee(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Club, {
    nullable: true,
    name: "club",
  })
  @nestAccessControl.UseRoles({
    resource: "Club",
    action: "read",
    possession: "any",
  })
  async resolveFieldClub(
    @graphql.Parent() parent: Course
  ): Promise<Club | null> {
    const result = await this.service.getClub(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
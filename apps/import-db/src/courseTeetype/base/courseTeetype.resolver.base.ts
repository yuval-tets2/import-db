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
import { CreateCourseTeetypeArgs } from "./CreateCourseTeetypeArgs";
import { UpdateCourseTeetypeArgs } from "./UpdateCourseTeetypeArgs";
import { DeleteCourseTeetypeArgs } from "./DeleteCourseTeetypeArgs";
import { CourseTeetypeCountArgs } from "./CourseTeetypeCountArgs";
import { CourseTeetypeFindManyArgs } from "./CourseTeetypeFindManyArgs";
import { CourseTeetypeFindUniqueArgs } from "./CourseTeetypeFindUniqueArgs";
import { CourseTeetype } from "./CourseTeetype";
import { Course } from "../../course/base/Course";
import { CourseTeetypeService } from "../courseTeetype.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CourseTeetype)
export class CourseTeetypeResolverBase {
  constructor(
    protected readonly service: CourseTeetypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CourseTeetype",
    action: "read",
    possession: "any",
  })
  async _courseTeetypesMeta(
    @graphql.Args() args: CourseTeetypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CourseTeetype])
  @nestAccessControl.UseRoles({
    resource: "CourseTeetype",
    action: "read",
    possession: "any",
  })
  async courseTeetypes(
    @graphql.Args() args: CourseTeetypeFindManyArgs
  ): Promise<CourseTeetype[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CourseTeetype, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CourseTeetype",
    action: "read",
    possession: "own",
  })
  async courseTeetype(
    @graphql.Args() args: CourseTeetypeFindUniqueArgs
  ): Promise<CourseTeetype | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CourseTeetype)
  @nestAccessControl.UseRoles({
    resource: "CourseTeetype",
    action: "create",
    possession: "any",
  })
  async createCourseTeetype(
    @graphql.Args() args: CreateCourseTeetypeArgs
  ): Promise<CourseTeetype> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        course: {
          connect: args.data.course,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CourseTeetype)
  @nestAccessControl.UseRoles({
    resource: "CourseTeetype",
    action: "update",
    possession: "any",
  })
  async updateCourseTeetype(
    @graphql.Args() args: UpdateCourseTeetypeArgs
  ): Promise<CourseTeetype | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          course: {
            connect: args.data.course,
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

  @graphql.Mutation(() => CourseTeetype)
  @nestAccessControl.UseRoles({
    resource: "CourseTeetype",
    action: "delete",
    possession: "any",
  })
  async deleteCourseTeetype(
    @graphql.Args() args: DeleteCourseTeetypeArgs
  ): Promise<CourseTeetype | null> {
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
  @graphql.ResolveField(() => Course, {
    nullable: true,
    name: "course",
  })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "any",
  })
  async resolveFieldCourse(
    @graphql.Parent() parent: CourseTeetype
  ): Promise<Course | null> {
    const result = await this.service.getCourse(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

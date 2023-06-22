/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ClubService } from "../club.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ClubCreateInput } from "./ClubCreateInput";
import { ClubWhereInput } from "./ClubWhereInput";
import { ClubWhereUniqueInput } from "./ClubWhereUniqueInput";
import { ClubFindManyArgs } from "./ClubFindManyArgs";
import { ClubUpdateInput } from "./ClubUpdateInput";
import { Club } from "./Club";
import { CourseFindManyArgs } from "../../course/base/CourseFindManyArgs";
import { Course } from "../../course/base/Course";
import { CourseWhereUniqueInput } from "../../course/base/CourseWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ClubControllerBase {
  constructor(
    protected readonly service: ClubService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Club })
  @nestAccessControl.UseRoles({
    resource: "Club",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: ClubCreateInput): Promise<Club> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Club] })
  @ApiNestedQuery(ClubFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Club",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Club[]> {
    const args = plainToClass(ClubFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Club })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Club",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ClubWhereUniqueInput
  ): Promise<Club | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Club })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Club",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ClubWhereUniqueInput,
    @common.Body() data: ClubUpdateInput
  ): Promise<Club | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          name: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Club })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Club",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ClubWhereUniqueInput
  ): Promise<Club | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          name: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/course")
  @ApiNestedQuery(CourseFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "any",
  })
  async findManyCourse(
    @common.Req() request: Request,
    @common.Param() params: ClubWhereUniqueInput
  ): Promise<Course[]> {
    const query = plainToClass(CourseFindManyArgs, request.query);
    const results = await this.service.findCourse(params.id, {
      ...query,
      select: {
        id: true,
        courseName: true,
        createdAt: true,
        updatedAt: true,

        club: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/course")
  @nestAccessControl.UseRoles({
    resource: "Club",
    action: "update",
    possession: "any",
  })
  async connectCourse(
    @common.Param() params: ClubWhereUniqueInput,
    @common.Body() body: CourseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      course: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/course")
  @nestAccessControl.UseRoles({
    resource: "Club",
    action: "update",
    possession: "any",
  })
  async updateCourse(
    @common.Param() params: ClubWhereUniqueInput,
    @common.Body() body: CourseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      course: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/course")
  @nestAccessControl.UseRoles({
    resource: "Club",
    action: "update",
    possession: "any",
  })
  async disconnectCourse(
    @common.Param() params: ClubWhereUniqueInput,
    @common.Body() body: CourseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      course: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}

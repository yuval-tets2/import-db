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
import { CourseService } from "../course.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CourseCreateInput } from "./CourseCreateInput";
import { CourseWhereInput } from "./CourseWhereInput";
import { CourseWhereUniqueInput } from "./CourseWhereUniqueInput";
import { CourseFindManyArgs } from "./CourseFindManyArgs";
import { CourseUpdateInput } from "./CourseUpdateInput";
import { Course } from "./Course";
import { CourseRatingFindManyArgs } from "../../courseRating/base/CourseRatingFindManyArgs";
import { CourseRating } from "../../courseRating/base/CourseRating";
import { CourseRatingWhereUniqueInput } from "../../courseRating/base/CourseRatingWhereUniqueInput";
import { CourseTeetypeFindManyArgs } from "../../courseTeetype/base/CourseTeetypeFindManyArgs";
import { CourseTeetype } from "../../courseTeetype/base/CourseTeetype";
import { CourseTeetypeWhereUniqueInput } from "../../courseTeetype/base/CourseTeetypeWhereUniqueInput";
import { SeasonCourseFindManyArgs } from "../../seasonCourse/base/SeasonCourseFindManyArgs";
import { SeasonCourse } from "../../seasonCourse/base/SeasonCourse";
import { SeasonCourseWhereUniqueInput } from "../../seasonCourse/base/SeasonCourseWhereUniqueInput";
import { TeeFindManyArgs } from "../../tee/base/TeeFindManyArgs";
import { Tee } from "../../tee/base/Tee";
import { TeeWhereUniqueInput } from "../../tee/base/TeeWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CourseControllerBase {
  constructor(
    protected readonly service: CourseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Course })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: CourseCreateInput): Promise<Course> {
    return await this.service.create({
      data: {
        ...data,

        club: {
          connect: data.club,
        },
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Course] })
  @ApiNestedQuery(CourseFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Course[]> {
    const args = plainToClass(CourseFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Course })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<Course | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Course })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() data: CourseUpdateInput
  ): Promise<Course | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          club: {
            connect: data.club,
          },
        },
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
  @swagger.ApiOkResponse({ type: Course })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<Course | null> {
    try {
      return await this.service.delete({
        where: params,
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
  @common.Get("/:id/courseRating")
  @ApiNestedQuery(CourseRatingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CourseRating",
    action: "read",
    possession: "any",
  })
  async findManyCourseRating(
    @common.Req() request: Request,
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<CourseRating[]> {
    const query = plainToClass(CourseRatingFindManyArgs, request.query);
    const results = await this.service.findCourseRating(params.id, {
      ...query,
      select: {
        id: true,
        tee: true,
        courseSlope: true,
        courseRating: true,
        coursePar: true,
        frontSlope: true,
        frontRating: true,
        frontPar: true,
        backSlope: true,
        backRating: true,
        backPar: true,
        createdAt: true,
        updatedAt: true,

        course: {
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

  @common.Post("/:id/courseRating")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async connectCourseRating(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: CourseRatingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      courseRating: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/courseRating")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async updateCourseRating(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: CourseRatingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      courseRating: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/courseRating")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async disconnectCourseRating(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: CourseRatingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      courseRating: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/courseTeetype")
  @ApiNestedQuery(CourseTeetypeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CourseTeetype",
    action: "read",
    possession: "any",
  })
  async findManyCourseTeetype(
    @common.Req() request: Request,
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<CourseTeetype[]> {
    const query = plainToClass(CourseTeetypeFindManyArgs, request.query);
    const results = await this.service.findCourseTeetype(params.id, {
      ...query,
      select: {
        id: true,
        teeId: true,
        teeType: true,
        createdAt: true,
        updatedAt: true,

        course: {
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

  @common.Post("/:id/courseTeetype")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async connectCourseTeetype(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: CourseTeetypeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      courseTeetype: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/courseTeetype")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async updateCourseTeetype(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: CourseTeetypeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      courseTeetype: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/courseTeetype")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async disconnectCourseTeetype(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: CourseTeetypeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      courseTeetype: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/seasonCourse")
  @ApiNestedQuery(SeasonCourseFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SeasonCourse",
    action: "read",
    possession: "any",
  })
  async findManySeasonCourse(
    @common.Req() request: Request,
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<SeasonCourse[]> {
    const query = plainToClass(SeasonCourseFindManyArgs, request.query);
    const results = await this.service.findSeasonCourse(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        course: {
          select: {
            id: true,
          },
        },

        season: {
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

  @common.Post("/:id/seasonCourse")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async connectSeasonCourse(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: SeasonCourseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      seasonCourse: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/seasonCourse")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async updateSeasonCourse(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: SeasonCourseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      seasonCourse: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/seasonCourse")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async disconnectSeasonCourse(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: SeasonCourseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      seasonCourse: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/tee")
  @ApiNestedQuery(TeeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Tee",
    action: "read",
    possession: "any",
  })
  async findManyTee(
    @common.Req() request: Request,
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<Tee[]> {
    const query = plainToClass(TeeFindManyArgs, request.query);
    const results = await this.service.findTee(params.id, {
      ...query,
      select: {
        id: true,
        name: true,
        gender: true,
        par: true,
        rating: true,
        slope: true,
        frating: true,
        fslope: true,
        brating: true,
        bslope: true,
        createdAt: true,
        updatedAt: true,

        course: {
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

  @common.Post("/:id/tee")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async connectTee(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: TeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tee: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/tee")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async updateTee(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: TeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tee: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/tee")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async disconnectTee(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: TeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tee: {
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
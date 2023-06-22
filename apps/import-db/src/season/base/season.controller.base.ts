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
import { SeasonService } from "../season.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SeasonCreateInput } from "./SeasonCreateInput";
import { SeasonWhereInput } from "./SeasonWhereInput";
import { SeasonWhereUniqueInput } from "./SeasonWhereUniqueInput";
import { SeasonFindManyArgs } from "./SeasonFindManyArgs";
import { SeasonUpdateInput } from "./SeasonUpdateInput";
import { Season } from "./Season";
import { SeasonCourseFindManyArgs } from "../../seasonCourse/base/SeasonCourseFindManyArgs";
import { SeasonCourse } from "../../seasonCourse/base/SeasonCourse";
import { SeasonCourseWhereUniqueInput } from "../../seasonCourse/base/SeasonCourseWhereUniqueInput";
import { TeamFindManyArgs } from "../../team/base/TeamFindManyArgs";
import { Team } from "../../team/base/Team";
import { TeamWhereUniqueInput } from "../../team/base/TeamWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SeasonControllerBase {
  constructor(
    protected readonly service: SeasonService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Season })
  @nestAccessControl.UseRoles({
    resource: "Season",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: SeasonCreateInput): Promise<Season> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        name: true,
        startDate: true,
        endDate: true,
        midseasonDate: true,
        numTeams: true,
        playersPerTeam: true,
        scheduleCreated: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Season] })
  @ApiNestedQuery(SeasonFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Season",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Season[]> {
    const args = plainToClass(SeasonFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        name: true,
        startDate: true,
        endDate: true,
        midseasonDate: true,
        numTeams: true,
        playersPerTeam: true,
        scheduleCreated: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Season })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Season",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: SeasonWhereUniqueInput
  ): Promise<Season | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        name: true,
        startDate: true,
        endDate: true,
        midseasonDate: true,
        numTeams: true,
        playersPerTeam: true,
        scheduleCreated: true,
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
  @swagger.ApiOkResponse({ type: Season })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Season",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: SeasonWhereUniqueInput,
    @common.Body() data: SeasonUpdateInput
  ): Promise<Season | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          name: true,
          startDate: true,
          endDate: true,
          midseasonDate: true,
          numTeams: true,
          playersPerTeam: true,
          scheduleCreated: true,
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
  @swagger.ApiOkResponse({ type: Season })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Season",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: SeasonWhereUniqueInput
  ): Promise<Season | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          name: true,
          startDate: true,
          endDate: true,
          midseasonDate: true,
          numTeams: true,
          playersPerTeam: true,
          scheduleCreated: true,
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
  @common.Get("/:id/seasonCourse")
  @ApiNestedQuery(SeasonCourseFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SeasonCourse",
    action: "read",
    possession: "any",
  })
  async findManySeasonCourse(
    @common.Req() request: Request,
    @common.Param() params: SeasonWhereUniqueInput
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
    resource: "Season",
    action: "update",
    possession: "any",
  })
  async connectSeasonCourse(
    @common.Param() params: SeasonWhereUniqueInput,
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
    resource: "Season",
    action: "update",
    possession: "any",
  })
  async updateSeasonCourse(
    @common.Param() params: SeasonWhereUniqueInput,
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
    resource: "Season",
    action: "update",
    possession: "any",
  })
  async disconnectSeasonCourse(
    @common.Param() params: SeasonWhereUniqueInput,
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
  @common.Get("/:id/team")
  @ApiNestedQuery(TeamFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "read",
    possession: "any",
  })
  async findManyTeam(
    @common.Req() request: Request,
    @common.Param() params: SeasonWhereUniqueInput
  ): Promise<Team[]> {
    const query = plainToClass(TeamFindManyArgs, request.query);
    const results = await this.service.findTeam(params.id, {
      ...query,
      select: {
        id: true,
        teamId: true,
        playerRank: true,
        sub: true,
        createdAt: true,
        updatedAt: true,

        members: {
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

  @common.Post("/:id/team")
  @nestAccessControl.UseRoles({
    resource: "Season",
    action: "update",
    possession: "any",
  })
  async connectTeam(
    @common.Param() params: SeasonWhereUniqueInput,
    @common.Body() body: TeamWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      team: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/team")
  @nestAccessControl.UseRoles({
    resource: "Season",
    action: "update",
    possession: "any",
  })
  async updateTeam(
    @common.Param() params: SeasonWhereUniqueInput,
    @common.Body() body: TeamWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      team: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/team")
  @nestAccessControl.UseRoles({
    resource: "Season",
    action: "update",
    possession: "any",
  })
  async disconnectTeam(
    @common.Param() params: SeasonWhereUniqueInput,
    @common.Body() body: TeamWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      team: {
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